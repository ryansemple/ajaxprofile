using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{
    public class UserProfile
    {
        public int UserId { get; set; }
        public DateTime DOB { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Biography { get; set; }
        public string ProfilePhoto { get; set; }
        public string AlbumName { get; set; }
        public bool AlbumAllPublished { get; set; }
    }
}