using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ajax.ViewModels;

namespace ajax.Models
{
    public class FriendsRepository
    {
        public List<FriendModel> GetFriendsList(int userId)
        {
            List<FriendModel> friendList = new List<FriendModel>();
            ryanajaxEntities context = new ryanajaxEntities();
            //var query = from fr in context.FriendRelateds
            //            where fr.UserIdPrimary == userId
            //            select new
            //            {
            //                FriendId = fr.UserIdSecondary
            //            };
            

            //var query2 = from up in context.UserProfiles
            //             from q in query
            //             where q.FriendId == up.UserId
            //             select new
            //             {
            //                 FriendId = q.FriendId,
            //                 FirstName = up.FirstName,
            //                 LastName = up.LastName,
            //                 ProfilePhoto = up.ProfilePhoto
            //             };

            var query = from fr in context.FriendRelateds
                         from up in context.UserProfiles
                        where fr.UserIdPrimary == userId && fr.UserIdSecondary == up.UserId && fr.FriendConfirm == true
                        select new
                        {
                            FriendId = fr.UserIdSecondary,
                            FirstName = up.FirstName,
                            LastName = up.LastName,
                            ProfilePhoto = up.ProfilePhoto
                        };


            foreach (var person in query)
            {
                friendList.Add(new FriendModel(person.FriendId, person.FirstName, person.LastName, person.ProfilePhoto));
            }
            return friendList;
        }
    }
}