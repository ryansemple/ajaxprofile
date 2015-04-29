using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{
    public class Work_History
    {
        public string CompanyName { get; set; }
        public int UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool CurrentJob { get; set; }
    }
}