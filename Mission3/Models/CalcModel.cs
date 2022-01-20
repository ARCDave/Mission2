using System;
using System.ComponentModel.DataAnnotations;

namespace Mission3.Models
{
    public class CalcModel
    {
        [Range(0, 100)]
        public double Assignments { get; set; }

        public double GroupProjects { get; set; }

        public double Quizzes { get; set; }

        public double Exams { get; set; }

        public double Intex { get; set; }

    }
}
