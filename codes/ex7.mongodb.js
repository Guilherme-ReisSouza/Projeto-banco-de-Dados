
use('mongodbVSCodePlaygroundDB');

    db.department.aggregate([
    {
      $unwind: "$building"
    },
    {
      $lookup: {
        from: "student",
        localField: "dept_name",
        foreignField: "dept_name",
        as: "student_info"
      },
    },
    {
        $unwind: "$student_info"
    },
    {
      $lookup: {
        from: "instructor",
        localField: "dept_name",
        foreignField: "dept_name",
        as: "ins_info"
      }
    },
    {
      $unwind: "$ins_info",
    },

    {
      $group: {
        _id: "$dept_name",
          budget: {$first:"$budget"},
          avg_salary:{$avg:"$ins_info.salary"},
          student_tot: { $sum: 1 }

      }
    },
    {
      $project: {
        _id: 0,
        department_name: "$_id",
        budget: "$budget",
        avg_salary: "$avg_salary",
        student_tot: 1
      }
    }
  
]);
