using ajax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ajax.ViewModels;
using ajax.Models;

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

        public List<UserModel> GetUserList()
        {
            ryanajaxEntities context = new ryanajaxEntities();
            var query = from usr in context.UserProfiles
                        select new
                        {
                            UserId = usr.UserId,
                            FirstName = usr.FirstName,
                            LastName = usr.LastName
                        };
            List<UserModel> userList = new List<UserModel>();
            foreach (var person in query)
            {
                userList.Add(new UserModel(person.UserId, person.FirstName, person.LastName));
            }
            return userList;
        }
    }
}