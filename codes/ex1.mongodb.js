
use('mongodbVSCodePlaygroundDB');

    db.student.aggregate([
    {
      $unwind: "$tot_cred"
    },
    {
      $lookup: {
        from: "advisor",
        localField: "ID",
        foreignField: "s_ID",
        as: "ad_info"
      },
    },
    {
        $unwind: "$ad_info"
    },
    {
      $lookup: {
        from: "instructor",
        localField: "ad_info.i_ID",
        foreignField: "ID",
        as: "ins_info"
      }
    },
    {
      $unwind: "$ins_info",
    },

    {
      $project: {
        _id: 0,
        student_name: "$name",
          instructor_name: "$ins_info.name",
          dept_name: "$ins_info.dept_name"
      }
    }
  
]);
