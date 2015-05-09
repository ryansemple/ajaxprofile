using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ajax.Models;
using ajax.ViewModels;

namespace ajax.Controllers.API
{
    public class UsersController : ApiController
    {
        public List<UserModel> GetAllUsers()
        {
            List<UserModel> userList = new List<UserModel>();
            ProfileRepository profileRepo = new ProfileRepository();
            userList = profileRepo.GetUserList();
            return userList;
        }
    }
}
