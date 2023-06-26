let Student = [
  {
    Name: 'Meghana',
    chemistry: 78,
    biology: 76,
    date_of_birth: 'December 5, 2010',
  },

  {
    Name: 'darga',
    chemistry: 87,
    biology: 90,
    date_of_birth: 'april 15, 2010',
  },

  {
    Name: 'siri',
    chemistry: 68,
    biology: 59,
    date_of_birth: 'December 29, 2010',
  },
];
Student.sort((a,b)=>b.chemistry-a.chemistry);
Student.forEach(e) =>{
  console.log('${e.Name} ${e.chemistry}${e.biology}${e.date_of_birth)');
}