import Link from 'next/link'
export default function ProjectCard({
  title,
  description,
  siteUrl,
  subtitle,
}) {
  return (
    <div class="row my-4 project-shape p-1 justify-stretch text-center accent-background mx-6 animation project-card h-full">

    <a href={siteUrl} target='_blank' class="column">
      <div class='basis-1/4 text-center justify-between align-items-evenly project-content'>
        <h1 class="text-xl secondary text-center font-medium"> {title}</h1>
        <h2 class='primary'>{subtitle}</h2>
        <p class='primary font-medium'> {description}</p>
        </div>
    </a>
    </div>
  );
}
