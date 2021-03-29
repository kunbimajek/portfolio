import React from 'react';

const Socials = (props) => {
    return (
        <section className="socials">
            <a href="https://github.com/kunbimajek" target="_blank" rel="noreferrer" className="pr-20">
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C14.3307 0 0 14.328 0 32C0 46.1387 9.168 58.1333 21.8853 62.3653C23.4827 62.6613 24 61.6693 24 60.8267V54.8693C15.0987 56.8053 13.2453 51.0933 13.2453 51.0933C11.7893 47.3947 9.69067 46.4107 9.69067 46.4107C6.78667 44.424 9.912 44.4667 9.912 44.4667C13.1253 44.6907 14.816 47.7653 14.816 47.7653C17.6693 52.656 22.3013 51.2427 24.128 50.424C24.4133 48.3573 25.2427 46.944 26.16 46.1467C19.0533 45.3333 11.5813 42.5893 11.5813 30.3307C11.5813 26.8347 12.832 23.9813 14.8773 21.7413C14.5467 20.9333 13.4507 17.6773 15.1893 13.272C15.1893 13.272 17.8773 12.4133 23.992 16.552C26.544 15.8427 29.28 15.488 32 15.4747C34.72 15.488 37.4587 15.8427 40.016 16.552C46.1253 12.4133 48.808 13.272 48.808 13.272C50.5493 17.68 49.4533 20.936 49.1227 21.7413C51.176 23.9813 52.416 26.8373 52.416 30.3307C52.416 42.6213 44.9307 45.328 37.8053 46.12C38.952 47.112 40 49.0587 40 52.0453V60.8267C40 61.6773 40.512 62.6773 42.136 62.3627C54.8427 58.1253 64 46.1333 64 32C64 14.328 49.672 0 32 0Z" fill={props.fill}/>
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/damilola-majekodunmi-471909116/" target="_blank" rel="noreferrer" className="pr-20">
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C14.328 0 0 14.328 0 32C0 49.672 14.328 64 32 64C49.672 64 64 49.672 64 32C64 14.328 49.672 0 32 0ZM26.6667 42.6667H21.3333V26.6667H26.6667V42.6667ZM24 24.2907C22.3813 24.2907 21.0667 22.968 21.0667 21.3333C21.0667 19.7013 22.3787 18.376 24 18.376C25.6213 18.376 26.9333 19.7013 26.9333 21.3333C26.9333 22.968 25.6187 24.2907 24 24.2907ZM45.3333 42.6667H40.0053V35.0373C40.0053 30.0213 34.6667 30.4453 34.6667 35.0373V42.6667H29.3333V26.6667H34.6667V29.5813C36.992 25.272 45.3333 24.952 45.3333 33.7093V42.6667Z" fill={props.fill}/>
                </svg>
            </a>
            <a href="https://twitter.com/Dami_Majek" target="_blank" rel="noreferrer">
                <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 0C14.328 0 0 14.328 0 32C0 49.672 14.328 64 32 64C49.672 64 64 49.672 64 32C64 14.328 49.672 0 32 0ZM48.176 25.72C48.664 36.4933 40.6293 48.504 26.4053 48.504C22.08 48.504 18.056 47.2347 14.6667 45.0613C18.7307 45.5413 22.7867 44.4107 26.0053 41.8907C22.656 41.8293 19.8267 39.6133 18.848 36.5707C20.0507 36.8 21.2347 36.7333 22.3093 36.44C18.6267 35.6987 16.0827 32.3813 16.1653 28.832C17.2 29.4053 18.3787 29.7493 19.6347 29.7893C16.224 27.5093 15.2587 23.0053 17.264 19.5627C21.04 24.1973 26.6853 27.2453 33.0507 27.5653C31.9333 22.776 35.568 18.16 40.5147 18.16C42.7147 18.16 44.7067 19.0907 46.104 20.5787C47.848 20.2373 49.4907 19.5973 50.968 18.72C50.3947 20.5093 49.1813 22.008 47.6 22.9573C49.1493 22.7707 50.6267 22.36 51.9973 21.7493C50.9733 23.2907 49.6773 24.64 48.176 25.72V25.72Z" fill={props.fill}/>
                </svg>
            </a>
        </section>
    )
}

export default Socials;