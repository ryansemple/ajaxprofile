using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ajax.ViewModels;
using ajax.Models;

namespace ajax.Controllers.API
{
    public class EducationController : ApiController
    {
        [ResponseType(typeof(EducationRepository))]
        public string PostEducation(EducationModel educationModel)
        {
            string result = string.Empty;
            if (ModelState.IsValid)
            {
                EducationRepository EducationRepo = new EducationRepository();
                if (EducationRepo.AddEducation(educationModel))
                {
                    result = "Education is successfully added.";
                }
                else
                {
                    result = "Failed to add education history.";
                }
            }

            return result;
        }

        public EducationModel GetEducation(int userId)
        {
            EducationRepository EducationRepo = new EducationRepository();
            EducationModel ed = EducationRepo.GetEducationModel(userId);
            return ed;
        }

        public string DeleteEducation(int userId)
        {
            EducationRepository EducationRepo = new EducationRepository();
            EducationRepo.DeleteEducation(userId);
            return "Education is deleted.";
        }

        public string PutEducation(EducationModel educationModel)
        {
            string result = string.Empty;
            if (ModelState.IsValid)
            {
                EducationRepository EducationRepo = new EducationRepository();
                if (EducationRepo.UpdateEducation(educationModel))
                {
                    result = "Education is successfully added.";
                }
                else
                {
                    result = "Failed to add education history.";
                }
            }

            return result;
        }
    }
}
