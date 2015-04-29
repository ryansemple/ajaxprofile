using ajax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.Models
{
    public class ProfileRepository
    {
        public void setBiography(string biographyContent)
        {
            ryanajaxEntities db = new ryanajaxEntities();
            UserProfile aProfile = (from p in db.UserProfiles
                               select p).FirstOrDefault();
            aProfile.Biography = biographyContent;
            db.SaveChanges();
        }
        public string getBiography()
        {
            ryanajaxEntities db = new ryanajaxEntities();
            UserProfile aProfile = (from p in db.UserProfiles
                                select p).FirstOrDefault();
            return aProfile.Biography;
        }
    }
}