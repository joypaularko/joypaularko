const coreSkills = [
  {
    name: 'Python',
    level: 92,
    detail: 'pandas, NumPy, scikit-learn, PyMC, PyTorch',
  },
  {
    name: 'R',
    level: 88,
    detail: 'tidyverse, ggplot2, lme4, Stan, Shiny',
  },
  {
    name: 'SQL',
    level: 84,
    detail: 'PostgreSQL, window functions, query tuning',
  },
  {
    name: 'C++',
    level: 70,
    detail: 'Rcpp, simulation engines, STL, performance',
  },
]

const toolkit = [
  'Bayesian Inference',
  'Regression Modeling',
  'Time Series',
  'Experimental Design',
  'A/B Testing',
  'Survival Analysis',
  'Monte Carlo',
  'Machine Learning',
  'Git',
  'Jupyter',
  'Tableau',
  'LaTeX',
]

export function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-xl font-semibold tracking-tight">Core languages</h3>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {coreSkills.map((skill) => (
          <li
            key={skill.name}
            className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_0_32px_-12px] hover:shadow-primary/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-sm font-semibold text-primary">
                {skill.name}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div
              role="meter"
              aria-label={`${skill.name} proficiency`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={skill.level}
              className="h-1.5 overflow-hidden rounded-full bg-secondary"
            >
              <div
                className="h-full rounded-full bg-primary shadow-[0_0_12px] shadow-primary/70"
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {skill.detail}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4">
        <h4 className="font-mono text-sm text-muted-foreground">
          Methods &amp; tooling
        </h4>
        <ul className="flex flex-wrap gap-2">
          {toolkit.map((item) => (
            <li
              key={item}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
