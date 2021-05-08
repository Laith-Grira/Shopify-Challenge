import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

const Banner = (props) => {

    function showBanner() {
        const nomineesNumber = props.count;
        if (nomineesNumber === 0) {
          return (<div className="alert alert-primary">
                    <p>Let's go! start choosing your nominees.</p>
                  </div>
                  );
        } else if (nomineesNumber < 5) {
          return (<div className=" alert alert-info">
                    <p>Success, you still have {5 - nomineesNumber} nominees available to choose.</p>
                  </div>
                  );
        } else if (nomineesNumber === 5) {
          return (<div className="alert alert-success">
                    <p>Success, your List of nominations is full!</p>
                  </div>
                  );
        } else {
          return (<div className="alert alert-danger">
                    <p>Error, cannot have more then 5 nominations</p>
                    <p>You have {nomineesNumber - 5} extra nominees</p>
                  </div>
                  );
        }
      }

    return ( 
        <div className="banner-msg">{showBanner()}</div>
     );
}
 
export default Banner;