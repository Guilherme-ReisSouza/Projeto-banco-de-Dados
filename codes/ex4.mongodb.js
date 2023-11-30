
use('mongodbVSCodePlaygroundDB');

    db.teaches_takes.aggregate([
    {
      $unwind: "$year"
    },
    {
      $lookup: {
        from: "instructor",
        localField: "ID_prof",
        foreignField: "ID",
        as: "instructor_info"
      },
    },
    {
        $unwind: "$instructor_info"
    },
    {
      $lookup: {
        from: "classroom_sections",
        localField: "course_id",
        foreignField: "sections.course_id",
        as: "sec_info"
      }
    },
    {
      $unwind: "$sec_info",
    },

    {
      $group: {
        _id: {
          building: "$sec_info.building",
          room_number: "$sec_info.room_number",
          professor: "$instructor_info.name"
        }
      }
    },
    {
      $project: {
        _id: 0,
        building: "$_id.building",
        room_number: "$_id.room_number",
        professor: "$_id.professor"
      }
    }
  
]);
