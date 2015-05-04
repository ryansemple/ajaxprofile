using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ajax.ViewModels
{ 
    public class EducationModel
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public string School { get; set; }
        [Required]
        public string EducationLevel { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public string Program { get; set; }

        public EducationModel(int userId, string school, string educationLevel, string department, string program)
        {
            this.UserId = userId;
            this.School = school;
            this.EducationLevel = educationLevel;
            this.Department = department;
            this.Program = program;
        }

        public EducationModel() { }
    }
}