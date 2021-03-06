import React,{Component} from "react";

class PositionItem extends Component{
	
	render(){
        let {content} = this.props;
        
        var logo="//www.lgstatic.com/"+content.companyLogo;
		return(
              	<li className="activeable list-item" data-id={content.positionId}>
		            <img src={logo} className="item-logo" alt=""/>
		            <div className="item-desc">
		                <h2 className="item-title">{content.companyName}</h2>
		                <p className="item-info">
		                    <span className="item-pos">{content.positionName}</span>
		                    <span className="item-salary">{content.salary}</span>
		                </p>
		                <p className="item-time">{content.createTime}</p>
		            </div>
		        </li>
              
			)
	}
}

export default PositionItem;