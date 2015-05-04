using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ajax.ViewModels;
using ajax.Models;
using System.Threading;

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

        public List<EducationModel> GetEducation(int userId)
        {
            EducationRepository EducationRepo = new EducationRepository();
            List<EducationModel> ed = new List<EducationModel>();

            for (int i = 0; i < 3; i++)
            {
                try
                {
                    ed = EducationRepo.GetEducationModel(userId);
                    if (ed != null)
                        break;
                }
                catch(Exception error)
                { }
                //Thread.Sleep(1000);
            }
                
            return ed;
        }

        public string DeleteEducation(EducationModel educationModel)
        {
            EducationRepository EducationRepo = new EducationRepository();
            EducationRepo.DeleteEducation(educationModel);
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
