import classNames from 'classnames/bind'
import styles from './Showcase.module.scss'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Container from './Container'
import Button from './Button'

let cx = classNames.bind(styles);

const Showcase = ({
    title, 
    description, 
    backgroundImage="/images/dishes.jpg",
    cta,
    halfHeight
}) => {
    let showcaseClasses = cx({
        showcase:true,
        'half-height': halfHeight
    })
    return <section
     className={styles.showcase} 
     style={{backgroundImage: `url(${backgroundImage})`}}>
            <Container>
                {title && <Heading level="2" marginBottom="1">{title}</Heading>}

                {description &&<Paragraph marginBottom="1">{description}</Paragraph>}
                
                {cta && <Button label={cta}/>}
            </Container>
                
            
            
        </section>
}
export default Showcase