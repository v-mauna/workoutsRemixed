export const Exercises = [{
    "name": "Bench Press",
    "type": ["Upper Body", "Chest","Full Body"]
},{
    "name": "Barbell Deadlift",
    "type": ["Legs", "Full Body"]
},{
    "name": "Double Kettlebell Bottoms-Up Squat",
    "type": ["Legs", "Lower Body","Full Body"]
},{
    "name": "Hanging Leg Raise",
    "type": ["Upper Body", "Core"]
},
{
    "name": "Ab Wheel Rollout",
    "type": ["Upper Body", "Core"]
},
{
    "name": "Kettlebell Clean and Press",
    "type": ["Upper Body", "Core","Arms","Shoulders"]
},{
    "name": "Dumbbell Alternate Bicep Curl",
    "type": ["Upper Body", "Arms"]
},{
    "name": "Dumbbell Tricep Extension",
    "type": ["Upper Body", "Arms"]
},{
    "name": "Dumbbell Side Raise",
    "type": ["Upper Body", "Arms", "Shoulders"]
},{
    "name": "Dumbbell Hammer Curl",
    "type": ["Upper Body", "Arms"]
},{
    "name": "Cable Rope Push Downs",
    "type": ["Upper Body", "Arms"]
}, {
    "name": "Cable Rear Delts",
    "type": ["Upper Body","Shoulders","Arms","Core"]
},{
    "name": "Dumbbell Split Squat",
    "type": ["Lower Body","Full Body","Legs"]
},{
    "name": "Dumbbell RDL",
    "type": ["Lower Body","Full Body","Legs"]
},{
    "name": "Lateral Lunge",
    "type": ["Lower Body","Full Body","Legs"]
},{
    "name": "Walking Lunges",
    "type": ["Lower Body","Full Body","Legs"]
},
{
    "name": "Lying Leg Curl",
    "type": ["Lower Body","Full Body","Legs"]
},
{
    "name": "Leg Extensions",
    "type": ["Lower Body","Full Body","Legs"]
},
{
    "name": "Kettlebell Swings",
    "type": ["Lower Body","Full Body","Legs"]
},{
    "name": "RFES Squats",
    "type": ["Lower Body","Full Body","Legs"]
},
{
    "name": "Incline Dumbbell Press",
    "type": ["Upper Body","Full Body","Chest"]
},{
    "name": "Chest Supported Row",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Cable Flye",
    "type": ["Upper Body","Full Body","Chest"]
},{
    "name":"Lateral Pulldown",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Seated Cable Row",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Skull Crusher",
    "type": ["Upper Body","Full Body","Arms"]
},
{
    "name":"Pendlay Row",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Pull Ups",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Shoulder Press",
    "type": ["Upper Body","Full Body","Shoulders","Core"]
},{
    "name":"Kettlebell Front Squat",
    "type": ["Lower Body","Full Body","Legs"]
},{
    "name": "Straight Arm Pulldown",
    "type": ["Upper Body","Full Body","Back"]
},{
    "name":"Dumbbell Hammer Curls",
    "type": ["Upper Body","Arms"]
},{
    "name":"Good Mornings",
    "type": ["Full Body","Legs"]
}

]

export const filterByType= (exercisesArr, type)=>{
    return exercisesArr.filter(exercise => exercise.type.includes(type))
}

filterByType(exercises, fullBody)
