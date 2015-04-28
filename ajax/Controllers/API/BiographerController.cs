using ajax.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Services;

namespace ajax.Controllers
{
    public class BiographerController : ApiController
    {
        [AcceptVerbs("GET", "POST")]
        [WebMethod]
        //public HttpResponseMessage setBiography(string biographyContent)
        public void setBiography(string biographyContent)
        {
            //if (biographyContent.Length > 20)
            //{
            //    ProfileRepository profileRepo = new ProfileRepository();
            //    profileRepo.setBiography(biographyContent);
            //    return Request.CreateResponse(HttpStatusCode.OK);
            //}
            //else {
            //    HttpError error = new HttpError("too many characters");
            //    return Request.CreateResponse(HttpStatusCode.NotFound, error);
            //}
            ProfileRepository profileRepo = new ProfileRepository();
            profileRepo.setBiography(biographyContent);
        }
        [HttpGet]
        public string getBiography()
        {
            ProfileRepository profileRepo = new ProfileRepository();
            return profileRepo.getBiography();
            //return "hey";
        }
    }
}
