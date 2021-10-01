import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Styles from '../../../assets/css/Profile.module.css';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {
  render() {
    let {
      email,
      firstName,
      lastName,
      socialProfileLink,
      picture,
      balance_points
    } = this.props.detailsObject;
    return (
      // <React.Fragment>
      //   <br />
      //   <br />
      //   <div className="row">
      //     <div className="col-md-12">
      //       {" "}
      //       <label className="">
      //         <h1>Your Profile</h1>{" "}
      //       </label>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="row">
      //     <div className="col-md-12">
      //       {" "}
      //       <label className="">
      //         {" "}
      //         <img
      //           className="img-fluid"
      //           alt="profile"
      //           src={picture}
      //           height="150"
      //           width="150"
      //         />
      //       </label>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="row">
      //     <div className="col-md-4">
      //       {" "}
      //       <label className="">Name</label>
      //     </div>
      //     <div className="col-md-8">
      //       {" "}
      //       <label className="">
      //         {" "}
      //         {firstName} {lastName}
      //       </label>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="row">
      //     <div className="col-md-4">
      //       {" "}
      //       <label className="">Email </label>
      //     </div>
      //     <div className="col-md-8">
      //       {" "}
      //       <label className="">{email} </label>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="row">
      //     <div className="col-md-4">
      //       {" "}
      //       <label className="">Gender </label>
      //     </div>
      //     <div className="col-md-8">
      //       {" "}
      //       <label className="">{gender} </label>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="row">
      //     <div className="col-md-4">
      //       {" "}
      //       <label className="">Social Link </label>
      //     </div>
      //     <div className="col-md-8">
      //       {" "}
      //       <label className="">
      //         {" "}
      //         <a
      //           target="_blank"
      //           rel="noopener noreferrer"
      //           href={socialProfileLink}
      //         >
      //           {socialProfileLink}
      //         </a>
      //       </label>
      //     </div>
      //   </div>
      //   <hr />
      // </React.Fragment>
      <>
        <div className={Styles.profileHeader}>
          <img
            className={Styles.profileImg}
            alt="profile"
            src={picture}
          />
        </div>
        <div className={Styles.profileContent}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <label className={Styles.label}>Name</label>
              <label className={Styles.label}>User Id</label>
              {socialProfileLink ? 
              <label className={Styles.label}>Social Profile Contact</label>
              : null }
              <label className={Styles.label}>Balance Points</label>
            </Grid>
            <Grid item xs={8}>
              <Paper className={Styles.profileValues}>{firstName} {lastName}</Paper>
              <Paper className={Styles.profileValues}>{email}</Paper>
              {socialProfileLink ? 
              <Paper className={Styles.profileValues}>{socialProfileLink}</Paper>
              : null }
              <Paper className={Styles.profileValues}>{balance_points} Points</Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Profile;
