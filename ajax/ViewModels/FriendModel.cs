using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{
    public class FriendModel
    {
        public int FriendId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePhoto { get; set; }
        public FriendModel(int friendId, string firstName, string lastName, string profilePhoto)
        {
            this.FriendId = friendId;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.ProfilePhoto = profilePhoto;
        }
        public FriendModel() { }
    }
}