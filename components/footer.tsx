import getStoreSettings from "@/actions/get-store-settings";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
    const storeSettings = await getStoreSettings();
    return ( 

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <Link href={`${storeSettings.siteLink}`} className="flex items-center">
                  <Image 
                  width={64}
                  height={64}
                  src="https://res.cloudinary.com/dmi5bpudp/image/upload/v1693655552/z8kqct32y2ophue3gvnn.png" 
                  className="h-16 mr-3" 
                  alt="doorahome Logo" 
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{storeSettings.name}</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <Link href={`${storeSettings.fRes1Link}`} className="hover:underline"> {storeSettings.fRes1Title} </Link>
                      </li>
                      <li>
                      <Link href={`${storeSettings.fRes2Link}`} className="hover:underline"> {storeSettings.fRes2Title} </Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link href={`${storeSettings.facebookUrl}`} className="hover:underline"> Facebook </Link>
                      </li>
                      <li>
                        <Link href={`${storeSettings.instagramUrl}`} className="hover:underline"> Instagram </Link>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <Link href={`${storeSettings.privacyPolicy}`} className="hover:underline"> Privacy Policy </Link>
                      </li>
                      <li>
                        <Link href={`${storeSettings.termsAndConditions}`} className="hover:underline"> Terms &amp; Conditions </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href={`${storeSettings.siteLink}`} className="hover:underline"> {storeSettings.name} </Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <Link href={`${storeSettings.facebookUrl}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path 
                            fillRule="evenodd" 
                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" 
                            clipRule="evenodd"
                        />
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </Link>
              <Link href={`${storeSettings.instagramUrl}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path 
                        fillRule="evenodd" 
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" 
                        clipRule="evenodd"
                    />
                </svg>
                  <span className="sr-only">Instagram page</span>
              </Link>
              <Link href={`${storeSettings.twitterUrl}`} className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        fillRule="evenodd" 
                        d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                        clipRule="evenodd"
                    />
                </svg>
                  <span className="sr-only">X page</span>
              </Link>
          </div>
      </div>
    </div>
</footer>

     );
}
 
export default Footer;