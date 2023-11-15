Overview
The app displays a profile section with a cover image, profile image, name, follower counts etc. Below that it shows multiple post components with sample post data.

The main goals were:

Implement smooth entrance animations for navbar and call to action button using GSAP
Display profile and post data in a clean, visually appealing way
Animate like button and heart count for engagement


Components
Navbar - Renders the top navigation with animated entrance
Profile - Shows the profile header with responsive cover image, profile image, name, follower counts and link
Post - Post component that displays sample post data like title, text, date, views etc
App - Main component that renders all of the other components



Animations
GSAP is used to animate the following:


Navbar slides in from left
Call to action button slides in from right
Like button pulses to attract attention
Heart count animates up slowly for engagement
Smooth entrance animations improve perceived performance and create a more polished feel. Attention-grabbing animations on the like button and heart count make those metrics more prominent.

![image](https://github.com/Madhukar-Reddy2002/TTT/assets/104265607/42711ac0-b750-482a-8042-1e027c573d2a) 


Responsive Design
The app uses Tailwind CSS classes like text-[4vw] lg:text-[2vw]] to adjust font sizes responsively for mobile versus desktop views.

Images also adjust their height based on viewport width for a responsive design.
