import styles from './styles.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles['hero__content']}>
        <p className={styles['hero__supertitle']}>Introducing Linear</p>  
        <h1 className={styles['hero__title']}>
          The issue tracking tool you&apos;ll enjoy using
        </h1>
        <p className={[styles['hero__subtext']]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti at alias temporibus incidunt sint blanditiis quam earum quas, eaque, beatae nostrum nam? Reiciendis quam nihil architecto vel ut eaque incidunt.
        </p>
        <form className={[styles['hero__cta']]}>
          <div className={[styles['hero__input-group']]}>
            <input
              type="email"
              placeholder='> enter your email'
              className={styles['hero__input']}
            />
            <button
              type="submit"
              className={styles['hero__submit']}
            >
              Request Access
            </button>
          </div>
        </form>
      </div>
      <img
        src="/assets/hero.png"
        alt="Linear Interface"
        className={styles['hero__image']}
      />
    </section>
  )
}