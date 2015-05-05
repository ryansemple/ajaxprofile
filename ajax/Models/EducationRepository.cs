using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ajax.ViewModels;

namespace ajax.Models
{
    public class EducationRepository
    {
        public bool AddEducation(EducationModel educationModel)
        {
            bool processResult = true;
            ryanajaxEntities context = new ryanajaxEntities();
            var query = from c in context.Educations
                        where c.School == educationModel.School
                        && c.Department == educationModel.Department
                        && c.Education_Level == educationModel.EducationLevel
                        && c.Program == educationModel.Program
                        select c;

            if (query.ToList().Count() > 0)
            { return false; }

            Education education = new Education();

            education.Education_Level = educationModel.EducationLevel;
            education.School = educationModel.School;
            education.UserId = educationModel.UserId;
            education.Department = educationModel.Department;
            education.Program = educationModel.Program;

            context.Educations.Add(education);

            try
            { context.SaveChanges(); }
            catch (Exception error)
            { processResult = false; }

            context.Dispose();
            return processResult;
        }

        public List<EducationModel> GetEducationModel(int userId)
        {
            ryanajaxEntities context = new ryanajaxEntities();
            //var query = context.Educations.Where(c => c.UserId == userId).Select(c => c).FirstOrDefault();
            var query = context.Educations.Where(c => c.UserId == userId).Select(c => c);
            List<EducationModel> ed = new List<EducationModel>();
            foreach (var item in query)
            {
                ed.Add(new EducationModel(
                        item.EducationId,
                        item.UserId,
                        item.School,
                        item.Education_Level,
                        item.Department,
                        item.Program
                    ));
            }
            //ed.Department = query.Department;
            //ed.EducationLevel = query.Education_Level;
            //ed.Program = query.Program;
            //ed.School = query.School;
            //ed.UserId = query.UserId;
            return ed;
        }

        public void DeleteEducation(EducationModel educationModel)
        {
            ryanajaxEntities context = new ryanajaxEntities();
            Education query = (from e in context.Educations
                               where e.EducationId == educationModel.EducationId
                               select e).FirstOrDefault();
            context.Educations.Remove(query);
            context.SaveChanges();
        }

        public bool UpdateEducation(EducationModel educationModel)
        {
            bool processResult = true;
            ryanajaxEntities context = new ryanajaxEntities();
            Education query = (from c in context.Educations
                               where c.EducationId == educationModel.EducationId
                               select c).FirstOrDefault();

            query.Program = educationModel.Program;
            query.School = educationModel.School;
            query.Education_Level = educationModel.EducationLevel;
            query.Department = educationModel.Department;

            context.SaveChanges();

            context.Dispose();
            return processResult;
        }
    }
}