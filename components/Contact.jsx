import { contactIcons } from '../services/contactServices';

const Contact = () => {
  return (
    <div id='contact' className='w-full'>
      <div className='bg-gradient-to-b from-black to-gray-800 mx-auto pt-8 lg:pt-16 text-center '>
        <h1 className='text-6xl md:text-7xl tracking-wider capitalize font-bold text-white'>
          contact
        </h1>

        <div className='flex flex-col md:flex-row gap-4 lg:gap-8 mt-4'>
          <div className='w-full md:w-1/2 h-full rounded-xl lg:mt-10 p-4'>
            <div className='grid mx-auto w-1/6'>
              {contactIcons.map(({ id, href, download, child, text }) => (
                <a
                  key={id}
                  href={href}
                  target='_blank'
                  rel='noreferrer'
                  download={download}
                >
                  <div className='flex flex-col items-center justify-center hover:scale-105 duration-200 p-3 lg:p-6 cursor-pointer text-yellow-400'>
                    {child}
                    {text}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* form  */}
          <div className='w-full md:w-1/2 h-full rounded-xl p-4'>
            <div className='text-left'>
              <form
                action='https://formsubmit.co/vytenis.kondrackis@gmail.com'
                method='POST'
              >
                <div className='grid-cols-1 md:grid-cols-2 gap-4 w-full py-1'>
                  <div className='flex flex-col'>
                    <label className='capitalize text-sm py-2 text-yellow-500 font-light'>
                      name
                    </label>
                    <input
                      required
                      type='text'
                      name='name'
                      className='border-2 rounded-lg p-3 flex focus:outline-none focus:border-yellow-400'
                    />
                  </div>

                  <div className='flex flex-col col-span-2'>
                    <label className='capitalize text-sm py-2 text-yellow-500 font-light'>
                      email
                    </label>
                    <input
                      required
                      type='email'
                      name='email'
                      className='border-2 rounded-lg p-3 flex focus:outline-none focus:border-yellow-400'
                    />
                  </div>
                  <div className='flex flex-col col-span-2'>
                    <label className='capitalize text-sm py-2 text-yellow-500 font-light'>
                      message
                    </label>
                    <textarea
                      required
                      name='message'
                      rows='10'
                      className='border-2 rounded-lg p-3 flex focus:outline-none focus:border-yellow-400'
                    ></textarea>
                  </div>
                </div>

                <div className='flex items-center justify-center'>
                  <button className='my-8  text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 bg-gray-800 hover:text-yellow-400 hover:border-yellow-400 duration-200'>
                    send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
