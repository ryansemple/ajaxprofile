using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{
    public class School_Department
    {
        public int DepartmentId { get; set; }
        public string Department { get; set; }
        public School_Program SchoolProgram{ get; set; }
    }
}