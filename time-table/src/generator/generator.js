// Function to generate timetable

const instances = [{
	teacher: "T1",
	sections: ["12A"],
	subject: "English",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T2",
	sections: ["12A"],
	subject: "Hindi",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T3",
	sections: ["12A"],
	subject: "Maths",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T4",
	sections: ["12A"],
	subject: "Science",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T1",
	sections: ["12B"],
	subject: "English",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T2",
	sections: ["12B"],
	subject: "Hindi",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T5",
	sections: ["12B"],
	subject: "Maths",
	numLectures: "4",
	numLabs: null
},
{
	teacher: "T6",
	sections: ["12B"],
	subject: "Science",
	numLectures: "4",
	numLabs: null
}]

const sections = ["12A", "12B"];
const teachers = ["T1", "T2", "T3", "T4", "T5", "T6"];
const slots = [8,8,8,8,8,8,5];

let secTeachers  = {};	
let i,j,k;
for (i in sections){
    secTeachers[sections[i]] = [];
}

console.log(secTeachers);

for (i in sections){
    for(j in instances){
        for(let k in instances[j].sections){ 
            if(instances[j].sections[k] === sections[i]){
                secTeachers[sections[i]].push(instances[j].teacher);
            }
        }	
    }
}

console.log(secTeachers)