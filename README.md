

# Themeforest template - Mamey

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

I chose the color palette based off of the fruit Mamey Sapote
    


## Getting Started
> Before messing with any files, check out the template in action:



First, run the development server:

```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<!-- You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file. -->

## Understanding the file structure 

`public` - where you will be adding your assets and supplementary files such as resume pdf or headshot\
`src/app` - where all the magic happens.
>`src/app/page.js`
>> overall layout of the page. Control all of your landing screen changes

>`data.js`
>> **THIS IS WHERE YOU ADD YOUR OWN INFORMATION**  the information for the site is then sourced from here 

>`src/app/components` 
>> you probably won't need to mess with these as much, but in case you were wondering how to manipulate the hamburger menu, the skill blocks, and the projects you can check that folder. 


>`src/app/layout.js`
>>again, probably don't have to mess around too much here, but if you want to ditch the logo + hamburger menu deal, just knock off `<HamburgerMenu/>`

>`globals.css`
>> **Very important for you if you want to change nmore than just the infon on the page.** This is where you can change colors, fonts, padding, size of containers and so on. We'll cover how to use it and some best practices in [this section](#how-to-use-and-make-it-your-own).


>`tailwind.config.js`
>> This depends on your comfort level with tailwind, I'll also give you some tips in [the themes section](#themes)
``
``



### Fonts
if you want to change your font, it is recommended to use from [this](https://fonts.google.com/variablefonts) list. Currently the font used is work sans, but if you want to change it change it in `globals.css` under 'body' and font family


### Color palettes
This is also adjusted in `global.css` under `:root`.



## Deploying on Vercel

## additional info
please don't hesistate to reach out if you accidentally find yourself on the red screen of death, happens to the best of us :) 
(or if i goofed somewhere and now your responsiveness is thrown off)

lauraantunez.com
techsapote@gmail.com



## Original Resources used

### Vercel docs

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Next docs

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
