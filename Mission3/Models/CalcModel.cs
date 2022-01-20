using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3.Models
{
    public class CalcModel
    {
        [Range(0, 100)]
        public double Assignments { get; set; }

        public double Group_Projects { get; set; }

        public double Quizzes { get; set; }

        public double Exams { get; set; }

        public double Intex { get; set; }

    }
}
