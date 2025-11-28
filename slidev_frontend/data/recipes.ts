export type Recipe = {
  id: string
  title: string
  description: string
  hero?: string // emoji or image url
  image?: string
  servings?: number
  time?: string
  ingredients: string[]
  steps: string[]
};

// PUBLIC_INTERFACE
export const recipes: Recipe[] = [
  {
    id: 'r1',
    title: 'Classic Margherita Pizza',
    description: 'Crisp crust topped with tomatoes, mozzarella, and basil.',
    hero: '🍕',
    time: '30 min',
    servings: 2,
    ingredients: [
      'Pizza dough (1 ball)',
      '1/2 cup tomato sauce',
      '200g fresh mozzarella, sliced',
      'Fresh basil leaves',
      '1 tbsp olive oil',
      'Salt & pepper'
    ],
    steps: [
      'Preheat oven to 250°C/480°F with a pizza stone or tray inside.',
      'Stretch dough on floured surface to a thin round.',
      'Spread tomato sauce, add mozzarella slices, season lightly.',
      'Bake 8–10 minutes until crust is puffed and cheese is melted.',
      'Finish with basil leaves and a drizzle of olive oil.',
    ]
  },
  {
    id: 'r2',
    title: 'Lemon Garlic Salmon',
    description: 'Pan-seared salmon with bright lemon and garlic butter.',
    hero: '🐟',
    time: '20 min',
    servings: 2,
    ingredients: [
      '2 salmon fillets',
      '2 tbsp butter',
      '2 cloves garlic, minced',
      '1 lemon (zest and juice)',
      'Salt & pepper',
      'Fresh parsley'
    ],
    steps: [
      'Pat salmon dry, season with salt and pepper.',
      'Sear skin-side down in a hot pan with a little oil until crisp.',
      'Flip, add butter, garlic, lemon zest, and juice.',
      'Spoon sauce over fish for 1–2 minutes until cooked to preference.',
      'Garnish with chopped parsley and serve.'
    ]
  },
  {
    id: 'r3',
    title: 'Creamy Mushroom Risotto',
    description: 'Arborio rice slowly cooked with mushrooms and parmesan.',
    hero: '🍄',
    time: '40 min',
    servings: 4,
    ingredients: [
      '1 cup Arborio rice',
      '2 tbsp olive oil',
      '1 onion, finely chopped',
      '2 cups sliced mushrooms',
      '1/2 cup white wine (optional)',
      '4 cups warm stock',
      '1/2 cup grated parmesan',
      '1 tbsp butter',
      'Salt & pepper'
    ],
    steps: [
      'Sauté onion in oil until translucent; add mushrooms and cook until browned.',
      'Stir in rice and toast 1–2 minutes.',
      'Add wine (optional) and cook until absorbed.',
      'Add warm stock a ladle at a time, stirring; wait until absorbed before next.',
      'When creamy and al dente, stir in parmesan and butter. Season to taste.'
    ]
  },
  {
    id: 'r4',
    title: 'Thai Green Curry',
    description: 'Fragrant coconut curry with vegetables and chicken.',
    hero: '🍛',
    time: '35 min',
    servings: 3,
    ingredients: [
      '2 tbsp green curry paste',
      '400ml coconut milk',
      '300g chicken, sliced (or tofu)',
      '1 cup mixed vegetables',
      '1 tbsp fish sauce (or soy sauce)',
      '1 tsp sugar',
      'Fresh basil and lime'
    ],
    steps: [
      'Sauté curry paste in a little oil until fragrant.',
      'Add coconut milk; bring to a gentle simmer.',
      'Add chicken and vegetables; cook until tender.',
      'Season with fish sauce and sugar.',
      'Finish with basil leaves and a squeeze of lime.'
    ]
  },
  {
    id: 'r5',
    title: 'Chocolate Chip Cookies',
    description: 'Chewy centers with crisp edges—crowd favorite.',
    hero: '🍪',
    time: '25 min',
    servings: 12,
    ingredients: [
      '1/2 cup butter, melted',
      '1/2 cup brown sugar',
      '1/3 cup white sugar',
      '1 egg',
      '1 tsp vanilla extract',
      '1 1/4 cups all-purpose flour',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '3/4 cup chocolate chips'
    ],
    steps: [
      'Preheat oven to 180°C/350°F.',
      'Mix melted butter with sugars; beat in egg and vanilla.',
      'Fold in dry ingredients, then chocolate chips.',
      'Scoop onto lined tray; bake 9–11 minutes until edges are golden.',
      'Cool on tray, then enjoy.'
    ]
  }
];

// PUBLIC_INTERFACE
export function getRecipeById(id?: string): Recipe | undefined {
  if (!id) return undefined;
  return recipes.find(r => r.id === id);
}
