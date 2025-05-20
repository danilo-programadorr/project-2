import React from 'react';
import { useFitnessApp } from '../context/FitnessAppContext';
import Button from '../components/ui/Button';
import { CheckCircle, Dumbbell, Utensils, ArrowDown, Download, RefreshCcw } from 'lucide-react';

const ResultsPage: React.FC = () => {
  const { userData, resetForm } = useFitnessApp();

  const workoutPlan = React.useMemo(() => generateWorkoutPlan(userData), [userData]);
  const nutritionPlan = React.useMemo(() => generateNutritionPlan(userData), [userData]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200 mb-4">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Your Personalized Fitness Plan</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Based on your profile and goals, we've created a customized plan for you
        </p>
      </div>
      
      {/* User summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Your Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 dark:text-gray-200">Personal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Name:</span>
                <span className="font-medium text-gray-900 dark:text-white">{userData.fullName}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Weight:</span>
                <span className="font-medium text-gray-900 dark:text-white">{userData.weight} kg</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Height:</span>
                <span className="font-medium text-gray-900 dark:text-white">{userData.height} cm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">BMI:</span>
                <span className="font-medium text-gray-900 dark:text-white">{userData.bmi}</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 dark:text-gray-200">Goals & Experience</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Goal:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {userData.goal === 'weight-loss' ? 'Weight Loss' : 
                   userData.goal === 'muscle-gain' ? 'Muscle Gain' : 'Maintenance'}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Level:</span>
                <span className="font-medium text-gray-900 dark:text-white capitalize">
                  {userData.experienceLevel}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Limitations:</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {userData.limitations ? 'Yes' : 'None'}
                </span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 dark:text-gray-200">Diet Preference</h3>
            <div className="mt-2 text-sm">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded-full font-medium">
                {userData.dietPreference === 'low-carb' ? 'Low Carb' :
                 userData.dietPreference === 'vegan' ? 'Plant-Based / Vegan' : 'Traditional'}
              </span>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Your meal plan follows your dietary preferences while supporting your fitness goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Workout Plan */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <Dumbbell className="h-6 w-6 text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Workout Plan</h2>
        </div>
        
        <div className="space-y-6">
          {workoutPlan.map((day, index) => (
            <div key={index} className="border dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 border-b dark:border-gray-700">
                <h3 className="font-medium text-blue-700 dark:text-blue-300">{day.day}</h3>
              </div>
              <div className="p-4">
                <p className="font-medium text-gray-800 dark:text-white mb-2">{day.focus}</p>
                <ul className="space-y-3">
                  {day.exercises.map((exercise, exIndex) => (
                    <li key={exIndex} className="flex flex-col sm:flex-row sm:items-center border-b dark:border-gray-700 pb-2 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 dark:text-white">{exercise.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{exercise.description}</p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1 sm:mt-0 sm:ml-4">
                        {exercise.sets} sets × {exercise.reps}
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  {day.note}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 border-t dark:border-gray-700 pt-4">
          <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            <Download className="h-4 w-4 mr-1" />
            <span>Download full workout plan (PDF)</span>
          </button>
        </div>
      </div>
      
      {/* Nutrition Plan */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-4">
          <Utensils className="h-6 w-6 text-green-500 mr-2" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Nutrition Plan</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Daily Macronutrient Targets</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-2 text-center mb-4">
                <div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{nutritionPlan.macros.protein}g</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Protein</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{nutritionPlan.macros.carbs}g</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Carbs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{nutritionPlan.macros.fats}g</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Fats</div>
                </div>
              </div>
              <div className="text-center border-t dark:border-gray-600 pt-3">
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{nutritionPlan.calories} kcal</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Daily Calories</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Meal Timing</h3>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <ul className="space-y-2">
                {nutritionPlan.mealTiming.map((meal, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">{meal.meal}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{meal.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium text-gray-700 dark:text-gray-200 mb-3">Recommended Foods</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(nutritionPlan.recommendedFoods).map(([category, foods]) => (
              <div key={category} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 dark:text-gray-200 mb-2 capitalize">{category}</h4>
                <ul className="space-y-1">
                  {Array.isArray(foods) && foods.map((food, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <ArrowDown className="h-3 w-3 text-green-500 mr-1 rotate-45" />
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-6 border-t dark:border-gray-700 pt-4">
          <button className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300">
            <Download className="h-4 w-4 mr-1" />
            <span>Download meal plan with recipes (PDF)</span>
          </button>
        </div>
      </div>
      
      <div className="flex justify-center mb-8">
        <Button onClick={resetForm} variant="secondary" className="mr-4">
          <RefreshCcw className="h-4 w-4 mr-2" />
          Create New Plan
        </Button>
        <Button variant="primary">
          <Download className="h-4 w-4 mr-2" />
          Download Complete Plan
        </Button>
      </div>
    </div>
  );
};

// Helper function to generate workout plan based on user data
function generateWorkoutPlan(userData: any) {
  // Base workouts with variations by experience level
  const baseWorkouts = {
    'weight-loss': [
      {
        day: 'Day 1: Upper Body',
        focus: 'Chest, Back, and Arms',
        exercises: [
          { name: 'Push-ups', description: 'Standard or modified based on strength', sets: '3-4', reps: '10-15' },
          { name: 'Dumbbell Rows', description: 'Focus on squeezing your back', sets: '3', reps: '12-15' },
          { name: 'Shoulder Press', description: 'Seated or standing with dumbbells', sets: '3', reps: '12-15' },
          { name: 'Tricep Dips', description: 'Using a chair or bench', sets: '3', reps: '10-15' },
          { name: 'Bicep Curls', description: 'Alternating arms with dumbbells', sets: '3', reps: '12-15' },
        ],
        note: 'Rest 60 seconds between sets. Focus on maintaining good form throughout.',
      },
      {
        day: 'Day 2: Lower Body & Core',
        focus: 'Legs, Glutes, and Abdominals',
        exercises: [
          { name: 'Bodyweight Squats', description: 'Focus on depth and form', sets: '4', reps: '15-20' },
          { name: 'Walking Lunges', description: 'Take long strides', sets: '3', reps: '12 per leg' },
          { name: 'Glute Bridges', description: 'Squeeze at the top', sets: '3', reps: '15-20' },
          { name: 'Plank', description: 'Hold with proper form', sets: '3', reps: '30-45 seconds' },
          { name: 'Mountain Climbers', description: 'Quick pace for cardio benefit', sets: '3', reps: '30 seconds' },
        ],
        note: 'This workout combines strength and cardio elements to maximize calorie burn.',
      },
      {
        day: 'Day 3: Cardio',
        focus: 'Calorie Burning and Heart Health',
        exercises: [
          { name: 'Jumping Jacks', description: 'Full range of motion', sets: '1', reps: '3 minutes' },
          { name: 'High Knees', description: 'Fast pace', sets: '3', reps: '45 seconds' },
          { name: 'Burpees', description: 'Modified or full depending on fitness level', sets: '3', reps: '10-15' },
          { name: 'Jump Rope', description: 'With or without actual rope', sets: '4', reps: '1 minute' },
          { name: 'Bodyweight Cardio Circuit', description: 'Combination of moves', sets: '2', reps: '5 minutes' },
        ],
        note: 'Keep rest periods short (30 seconds) to maintain elevated heart rate throughout the workout.',
      },
      {
        day: 'Day 4: Active Recovery',
        focus: 'Flexibility and Mobility',
        exercises: [
          { name: 'Walking', description: 'Brisk pace outdoors if possible', sets: '1', reps: '30 minutes' },
          { name: 'Dynamic Stretching', description: 'Full body movement preparation', sets: '1', reps: '10 minutes' },
          { name: 'Yoga Flow', description: 'Basic poses focusing on breath', sets: '1', reps: '15 minutes' },
          { name: 'Foam Rolling', description: 'Focus on tight areas', sets: '1', reps: '10 minutes' },
        ],
        note: 'This recovery day is crucial for allowing your muscles to repair while still keeping active.',
      },
    ],
    'muscle-gain': [
      {
        day: 'Day 1: Push (Chest, Shoulders, Triceps)',
        focus: 'Upper Body Pushing Muscles',
        exercises: [
          { name: 'Push-ups', description: 'Various hand positions for different emphasis', sets: '4', reps: '8-12' },
          { name: 'Dumbbell Chest Press', description: 'Flat or incline position', sets: '4', reps: '8-10' },
          { name: 'Shoulder Press', description: 'Seated with dumbbells', sets: '3', reps: '8-10' },
          { name: 'Lateral Raises', description: 'Control the movement', sets: '3', reps: '10-12' },
          { name: 'Tricep Dips', description: 'Weighted if possible', sets: '3', reps: '8-12' },
        ],
        note: 'Rest 90-120 seconds between sets for optimal strength development.',
      },
      {
        day: 'Day 2: Pull (Back, Biceps)',
        focus: 'Upper Body Pulling Muscles',
        exercises: [
          { name: 'Pull-ups/Assisted Pull-ups', description: 'Use assistance if needed', sets: '4', reps: '6-10' },
          { name: 'Dumbbell Rows', description: 'Single-arm focus', sets: '4', reps: '8-10' },
          { name: 'Face Pulls', description: 'With resistance band', sets: '3', reps: '12-15' },
          { name: 'Bicep Curls', description: 'Standing with dumbbells', sets: '3', reps: '10-12' },
          { name: 'Hammer Curls', description: 'Alternate arms', sets: '3', reps: '10-12' },
        ],
        note: 'Focus on the mind-muscle connection, especially for back exercises.',
      },
      {
        day: 'Day 3: Legs & Core',
        focus: 'Lower Body Strength and Core Stability',
        exercises: [
          { name: 'Squats', description: 'Bodyweight or weighted', sets: '4', reps: '8-12' },
          { name: 'Lunges', description: 'Walking or stationary', sets: '3', reps: '10 per leg' },
          { name: 'Romanian Deadlifts', description: 'With dumbbells', sets: '4', reps: '8-10' },
          { name: 'Calf Raises', description: 'Double or single leg', sets: '3', reps: '15-20' },
          { name: 'Plank Variations', description: 'Standard and side planks', sets: '3', reps: '30-60 seconds' },
        ],
        note: 'Eat a protein-rich meal within 1-2 hours after this workout for optimal recovery.',
      },
      {
        day: 'Day 4: Rest and Recovery',
        focus: 'Muscle Recovery and Growth',
        exercises: [
          { name: 'Light Walking', description: 'Promote blood flow without fatigue', sets: '1', reps: '20-30 minutes' },
          { name: 'Static Stretching', description: 'Hold each stretch for 30 seconds', sets: '1', reps: '15 minutes' },
          { name: 'Foam Rolling', description: 'Target larger muscle groups', sets: '1', reps: '10-15 minutes' },
        ],
        note: 'Complete rest is essential for muscle growth. Focus on quality sleep and proper nutrition today.',
      },
    ],
    'maintenance': [
      {
        day: 'Day 1: Full Body Strength',
        focus: 'Balanced Strength Training',
        exercises: [
          { name: 'Push-ups', description: 'Standard or modified', sets: '3', reps: '10-15' },
          { name: 'Bodyweight Squats', description: 'Full range of motion', sets: '3', reps: '15-20' },
          { name: 'Dumbbell Rows', description: 'Single arm focus', sets: '3', reps: '12 per arm' },
          { name: 'Lunges', description: 'Forward or reverse', sets: '3', reps: '10 per leg' },
          { name: 'Plank', description: 'Maintain proper form', sets: '3', reps: '45 seconds' },
        ],
        note: 'This balanced workout hits all major muscle groups for overall fitness.',
      },
      {
        day: 'Day 2: Cardio and Mobility',
        focus: 'Heart Health and Flexibility',
        exercises: [
          { name: 'Interval Walking/Jogging', description: 'Alternate 1 min fast, 2 min slow', sets: '1', reps: '20 minutes' },
          { name: 'Jump Rope', description: 'Continuous or intervals', sets: '3', reps: '2 minutes' },
          { name: 'Dynamic Stretching', description: 'Full body movement preparation', sets: '1', reps: '10 minutes' },
          { name: 'Yoga Flow', description: 'Focus on breathing and form', sets: '1', reps: '15 minutes' },
        ],
        note: 'This session improves cardiovascular fitness while enhancing overall mobility.',
      },
      {
        day: 'Day 3: Core and Balance',
        focus: 'Stability and Abdominal Strength',
        exercises: [
          { name: 'Bicycle Crunches', description: 'Slow and controlled', sets: '3', reps: '20 total' },
          { name: 'Bird Dog', description: 'Opposite arm and leg extension', sets: '3', reps: '12 per side' },
          { name: 'Side Plank', description: 'Hold steady', sets: '3', reps: '30 seconds per side' },
          { name: 'Russian Twists', description: 'With or without weight', sets: '3', reps: '20 total' },
          { name: 'Single Leg Balance', description: 'Add arm movements for challenge', sets: '2', reps: '30 seconds per leg' },
        ],
        note: 'Core strength is crucial for overall fitness and injury prevention.',
      },
      {
        day: 'Day 4: Active Recovery',
        focus: 'Light Activity and Rejuvenation',
        exercises: [
          { name: 'Brisk Walking', description: 'Outdoors if possible', sets: '1', reps: '30 minutes' },
          { name: 'Full Body Stretching', description: 'Hold each stretch for 30 seconds', sets: '1', reps: '15 minutes' },
          { name: 'Gentle Yoga', description: 'Restorative poses', sets: '1', reps: '15 minutes' },
        ],
        note: 'This recovery day helps maintain activity levels while allowing your body to rest and regenerate.',
      },
    ],
  };

  // Select the appropriate workout plan based on goal and potentially modify based on experience level
  let workoutPlan = baseWorkouts[userData.goal] || baseWorkouts['maintenance'];
  
  // Modify based on experience level
  if (userData.experienceLevel === 'advanced') {
    // For advanced users, increase intensity
    workoutPlan = workoutPlan.map(day => {
      return {
        ...day,
        exercises: day.exercises.map(exercise => {
          // Increase sets or reps for advanced users
          const sets = exercise.sets.includes('-') 
            ? exercise.sets.split('-')[1] 
            : (parseInt(exercise.sets) + 1).toString();
          return { ...exercise, sets };
        })
      };
    });
  } else if (userData.experienceLevel === 'beginner') {
    // For beginners, decrease intensity
    workoutPlan = workoutPlan.map(day => {
      return {
        ...day,
        exercises: day.exercises.map(exercise => {
          // Decrease sets or reps for beginners
          const sets = exercise.sets.includes('-')
            ? exercise.sets.split('-')[0]
            : Math.max(2, parseInt(exercise.sets) - 1).toString();
          return { ...exercise, sets };
        })
      };
    });
  }
  
  // If user has limitations, modify the plan
  if (userData.limitations) {
    workoutPlan = workoutPlan.map(day => {
      return {
        ...day,
        note: day.note + " Remember to modify exercises as needed based on your physical limitations."
      };
    });
  }
  
  return workoutPlan;
}

// Helper function to generate nutrition plan based on user data
function generateNutritionPlan(userData: any) {
  let baseCalories = 0;
  let proteinRatio = 0;
  let carbsRatio = 0;
  let fatsRatio = 0;
  
  // Calculate base calories (very simplified BMR)
  if (userData.gender === 'male') {
    baseCalories = 10 * Number(userData.weight) + 6.25 * Number(userData.height) - 5 * 30 + 5;
  } else {
    baseCalories = 10 * Number(userData.weight) + 6.25 * Number(userData.height) - 5 * 30 - 161;
  }
  
  // Adjust calories based on goal
  let calories = 0;
  if (userData.goal === 'weight-loss') {
    calories = baseCalories * 0.8; // 20% deficit
    proteinRatio = 0.4; // 40% protein
    carbsRatio = 0.3; // 30% carbs
    fatsRatio = 0.3; // 30% fats
  } else if (userData.goal === 'muscle-gain') {
    calories = baseCalories * 1.15; // 15% surplus
    proteinRatio = 0.3; // 30% protein
    carbsRatio = 0.45; // 45% carbs
    fatsRatio = 0.25; // 25% fats
  } else {
    calories = baseCalories; // maintenance
    proteinRatio = 0.3; // 30% protein
    carbsRatio = 0.4; // 40% carbs
    fatsRatio = 0.3; // 30% fats
  }
  
  // Adjust macros based on diet preference
  if (userData.dietPreference === 'low-carb') {
    proteinRatio = 0.35;
    carbsRatio = 0.25;
    fatsRatio = 0.4;
  } else if (userData.dietPreference === 'vegan') {
    proteinRatio = 0.25;
    carbsRatio = 0.55;
    fatsRatio = 0.2;
  }
  
  // Calculate macros in grams
  const caloriesRounded = Math.round(calories / 100) * 100; // Round to nearest 100
  const proteinGrams = Math.round((caloriesRounded * proteinRatio) / 4); // 4 calories per gram of protein
  const carbsGrams = Math.round((caloriesRounded * carbsRatio) / 4); // 4 calories per gram of carbs
  const fatsGrams = Math.round((caloriesRounded * fatsRatio) / 9); // 9 calories per gram of fat
  
  // Generate meal timing
  const mealTiming = [
    { meal: 'Breakfast', time: '7:00 - 8:00 AM' },
    { meal: 'Mid-Morning Snack', time: '10:00 - 10:30 AM' },
    { meal: 'Lunch', time: '12:30 - 1:30 PM' },
    { meal: 'Afternoon Snack', time: '3:30 - 4:00 PM' },
    { meal: 'Dinner', time: '6:30 - 7:30 PM' },
  ];
  
  // Generate recommended foods based on diet preference
  let recommendedFoods: Record<string, string[]> = {
    proteins: [],
    carbs: [],
    fats: [],
    vegetables: [
      'Broccoli',
      'Spinach',
      'Kale',
      'Bell Peppers',
      'Zucchini'
    ],
    fruits: [
      'Berries',
      'Apples',
      'Oranges',
      'Bananas'
    ]
  };
  
  if (userData.dietPreference === 'low-carb') {
    recommendedFoods.proteins = ['Chicken Breast', 'Turkey', 'Eggs', 'Beef', 'Fish'];
    recommendedFoods.carbs = ['Sweet Potatoes', 'Quinoa', 'Brown Rice (limited)', 'Lentils'];
    recommendedFoods.fats = ['Avocado', 'Olive Oil', 'Nuts', 'Seeds', 'Coconut Oil'];
  } else if (userData.dietPreference === 'vegan') {
    recommendedFoods.proteins = ['Tofu', 'Tempeh', 'Lentils', 'Chickpeas', 'Hemp Seeds'];
    recommendedFoods.carbs = ['Quinoa', 'Brown Rice', 'Oats', 'Sweet Potatoes', 'Whole Grain Pasta'];
    recommendedFoods.fats = ['Avocado', 'Olive Oil', 'Nuts', 'Seeds', 'Nut Butters'];
  } else {
    recommendedFoods.proteins = ['Chicken Breast', 'Turkey', 'Eggs', 'Fish', 'Greek Yogurt'];
    recommendedFoods.carbs = ['Brown Rice', 'Quinoa', 'Sweet Potatoes', 'Oats', 'Whole Grain Bread'];
    recommendedFoods.fats = ['Avocado', 'Olive Oil', 'Nuts', 'Seeds', 'Fatty Fish'];
  }
  
  return {
    calories: caloriesRounded,
    macros: {
      protein: proteinGrams,
      carbs: carbsGrams,
      fats: fatsGrams
    },
    mealTiming,
    recommendedFoods
  };
}

export default ResultsPage;