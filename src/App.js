import React,{Suspense} from 'react';
import Loader from './components/Loader'
import CircleLoader from './components/CircleLoader'
import image1 from './logo512.png'
import image2 from './logo512.png'
import Error from './components/Error'

  const Data = React.lazy(()=> import('./components/Data'))
  const Image = React.lazy(()=> import('./components/Image'))

    function App() {
        return (<>
        <div >
          <Suspense fallback={<Loader/>}>
            <Data/>
          </Suspense>
          <Suspense fallback={<Loader/>}>
              <Data/>
          </Suspense>
          <Suspense fallback ={<CircleLoader/>}>
            <div>
              <Error>
                <Image val={image1}/>
              </Error>
            </div>
            <div>
              <Error>
                <Image val={image2}/>
              </Error>
            </div>
            <div>
              <Error>
                <Image val={"noimg"}/>
              </Error>
            </div>
          </Suspense>
        </div>
      </>);
    }

export default App;
