import Link from 'next/link'
export default function ProjectCard({
  title,
  description,
  deploymentURL,
  subtitle,
}) {
  return (
    <div class="flex flex-wrap my-4 skill-shape p-5 justify-stretch text-center accent-background w-1/4 h-1/4 mx-6 animation ">

    <a href={deploymentURL} target='_blank' class="">
      <div class='basis-1/4 text-center justify-center'>
        <h1 class="text-3xl secondary text-center font-medium"> {title}</h1>
        <h2 class='primary'>{subtitle}</h2>
        <p class='primary'> {description}</p>
        </div>
    </a>
    </div>
  );
}
