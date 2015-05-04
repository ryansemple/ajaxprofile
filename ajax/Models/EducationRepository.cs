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

        public EducationModel GetEducationModel(int userId)
        {
            ryanajaxEntities context = new ryanajaxEntities();
            var query = context.Educations.Where(c => c.UserId == userId).Select(c => c).FirstOrDefault();
            EducationModel educationModel = new EducationModel();
            EducationModel ed = new EducationModel();
            ed.Department = query.Department;
            ed.EducationLevel = query.Education_Level;
            ed.Program = query.Program;
            ed.School = query.School;
            ed.UserId = query.UserId;
            return ed;
        }

        public void DeleteEducation(int userId)
        {
            ryanajaxEntities context = new ryanajaxEntities();
            Education query = context.Educations.Where(c => c.UserId == userId).Select(c => c).FirstOrDefault();
            context.Educations.Remove(query);
            context.SaveChanges();
        }

        public bool UpdateEducation(EducationModel educationModel)
        {
            bool processResult = true;
            ryanajaxEntities context = new ryanajaxEntities();

            // Delete old record
            DeleteEducation(educationModel.UserId);
            // Add new record
            AddEducation(educationModel);

            context.Dispose();
            return processResult;
        }
    }
}