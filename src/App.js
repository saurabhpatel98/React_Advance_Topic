import React,{Suspense} from 'react';
import Loader from './Loader'
import CircleLoader from './CircleLoader'
import image1 from './logo512.png'
import image2 from './logo512.png'
import Error from './Error'

  const Data = React.lazy(()=> import('./Data'))
  const Image = React.lazy(()=> import('./Image'))

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
            <Error>
              <Image val={image2}/>
            </Error>
            <Error>
              <Image val={"noimg"}/>
            </Error>
          </Suspense>
            </div>
      </>);
    }

export default App;
