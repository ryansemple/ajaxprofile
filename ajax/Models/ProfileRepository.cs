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
            profile aProfile = (from p in db.profiles
                               select p).FirstOrDefault();
            aProfile.biography = biographyContent;
            db.SaveChanges();
        }
        public string getBiography()
        {
            ryanajaxEntities db = new ryanajaxEntities();
            profile aProfile = (from p in db.profiles
                                select p).FirstOrDefault();
            return aProfile.biography;
        }
        public void CreateProfile()
        {
            profile profile = new profile();
        }
    }
}