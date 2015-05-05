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

        public void AddUser(string lastName, string firstName, string userName)
        {
            ryanajaxEntities context = new ryanajaxEntities();

            string email = context.AspNetUsers.Where(c => c.Email == userName).Select(u => u.Email).FirstOrDefault();
            UserProfile userProfile = new UserProfile();
            userProfile.DOB = DateTime.Now;
            userProfile.FirstName = firstName;
            userProfile.LastName = lastName;
            userProfile.Email = email;
            context.UserProfiles.Add(userProfile);

            context.SaveChanges();
        }
    }
}