const {render} = ReactDOM;
        var DriverLiscence = React.createClass({
        render() {
        return (
<div id ="main"  className="row">
    
    <div id="main-container" className="col-lg-12">
        <div className="row" id="header">
            <div className = "col-lg-4" id="stateName">
                Texas
            </div>
            <div className = "col-lg-8" id="licenseLimit">
                LIMITED-TERM<br/>
                DRIVER LICENSE
            </div>
        </div>
        <div className="row" id="detailsContainer">
            <div className="col-lg-4" id="image">
                <img src="./images/1.jpg" alt="Holders Pic" class="img-thumbnail"/>
                <p>SIGN</p>
            </div>
            <div className="col-lg-8" id="details">
                <div className="row">
                    <div className="col-lg-3 title col-sm-6">DL</div>
                    <div className="col-lg-3 input col-sm-6">0967432</div>
                    <div className="col-lg-3 title col-sm-6">Class</div>
                    <div className="col-lg-3 input col-sm-6">C</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 title col-sm-6">ISS</div>
                    <div className="col-lg-3 input col-sm-6">02/16/2017</div>
                    <div className="col-lg-3 title col-sm-6">Exp</div>
                    <div className="col-lg-3 input col-sm-6">09/11/2018</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 title col-sm-6">DOB</div>
                    <div className="col-lg-3 input col-sm-6">10/07/1984</div>
                    <div className="col-lg-3 title col-sm-6">Name</div>
                    <div className="col-lg-3 input col-sm-6">SHALU FNU</div>
                </div>
                <div className="row">
                    <div className="col-lg-3 title col-sm-6">ADDRESS</div>
                    <div className="col-lg-9 input col-sm-6">401 W NORTHWEST HWY #4205</div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-3 title col-sm-6">Restriction</div>
                    <div className="col-lg-3 input col-sm-6">NONE</div>
                    <div className="col-lg-3 title col-sm-6">End</div>
                    <div className="col-lg-3 input col-sm-6">NONE</div>
                </div>
                <div className="row">
                    <div className="col-lg-2 title col-sm-6">Hgt</div>
                    <div className="col-lg-2 input col-sm-6">5'-01"</div>
                    <div className="col-lg-2 title col-sm-6">Sex</div>
                    <div className="col-lg-2 input col-sm-6">F</div>
                     <div className="col-lg-2 title col-sm-6">Eyes</div>
                    <div className="col-lg-2 input col-sm-6">BRO</div>
                </div>
            </div>

        </div>
    </div> 
</div>
                )

        }
        })
        ReactDOM.render(<DriverLiscence/>, document.getElementById('react-container'))