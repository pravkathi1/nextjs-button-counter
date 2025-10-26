# Next.js Button Counter

## Project Description
A simple React/Next.js web app demonstrating a reusable **Counter** component.  
Users can increment, decrement, and reset a count with a customizable step.  
Includes accessibility features such as clear button labels and live updates.

---

## How to Run Locally

1. Clone the repository:
```bash
git clone <your-repo-url>
2. Navigate to Project Folder
cd nextjs-button-counter
3. Install dependencies:
npm install
4. Run the development server:
npm run dev
5. http://localhost:3000

##How to Build

Build the production version:
npm run build


Start the production server:
npm start

##Features Implemented:

 Counter displays the current count

 Increment button increases count by step

 Decrement button decreases count by step (disabled if count-step < 0)

 Reset button sets count back to initialCount

 Numeric step input allows changing increment/decrement amount

 Props: initialCount and initialStep implemented

 Two Counter instances on the Home page: one default, one with custom props

 Accessibility: buttons have clear labels, count region uses aria-live="polite"

 Clean layout and simple styling

 No runtime errors


##Known Issues / Limitations:

Styling is basic and may need enhancements for production

Step input only supports integers

Counts reset when the page reloads (no persistence)

