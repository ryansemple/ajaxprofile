using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{
    public class EducationModel
    {
        public string School { get; set; }
        public string EducationLevel { get; set; }
        public School_Department SchoolDepartment { get; set; }

    }
}