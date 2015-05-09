using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ajax.ViewModels;
using ajax.Models;

namespace ajax.Controllers.API
{
    public class FriendsController : ApiController
    {
        public List<FriendModel> GetFriends(int userId)
        {
            FriendsRepository friendRepo = new FriendsRepository();
            List<FriendModel> friendModelList = new List<FriendModel>();
            FriendModel friendModel = new FriendModel();
            friendModelList = friendRepo.GetFriendsList(userId);
            return friendModelList;
        }
    }
}
