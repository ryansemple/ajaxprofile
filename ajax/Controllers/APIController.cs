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
    public class APIController : ApiController
    {
        [WebMethod]
        public void setBiography(string biographyContent)
        {
            ProfileRepository profileRepo = new ProfileRepository();
            profileRepo.setBiography(biographyContent);
        }
    }
}
