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
        public float Assignments { get; set; }

        public float Group_Projects { get; set; }

        public float Quizzes { get; set; }

        public float Exams { get; set; }

        public float Intex { get; set; }

    }
}
