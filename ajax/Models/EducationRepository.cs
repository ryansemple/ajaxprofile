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

            return processResult;
        }
    }
}