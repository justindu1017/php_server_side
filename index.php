<?php
  include_once "includes/dbh.inc.php";
  $response = array();
  if(isset($_POST['userName']) &&isset($_POST['passWord'])){
    $userName = $_POST['userName'];
    $passWordP = $_POST['passWord'];
  }else{
    $response["result"] = 0;
    $response["ErrMsg"] = "err!!! Post Method wrong!!! please contect official";
    echo json_encode($response);
    mysqli_close($conn);
  }


  $query = "select UID, userName, passWord, email from usert where userName = ?";
  $stmt = mysqli_stmt_init($conn);

  if(!mysqli_stmt_prepare($stmt, $query)){
    $response['result'] = 0;
    $response['ErrMsg'] = "err!!! prepare wrong!!! please contect offical";
    echo json_encode($response);
    mysqli_close($conn);
  }else {
    mysqli_stmt_bind_param($stmt,"s",$userName);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_bind_result($stmt, $UID, $userName, $passWord, $eMail);
    mysqli_stmt_store_result($stmt);
    
    if(mysqli_stmt_num_rows($stmt) ){
      while(mysqli_stmt_fetch($stmt)){
        if(password_verify($passWordP,$passWord)){
                $response['result']=1;
                $response['successMsg']="Login success";
                $response['UID']=$UID;
                $response['userName']=$userName;
                $response['eMail']=$eMail;

                echo json_encode($response);
                mysqli_close($conn);
        }else {
          $response['result'] = 0;
          $response['ErrMsg'] = "找不到帳號，請確認帳密是否有誤";
          echo json_encode($response);
          mysqli_close($conn);
        }
      } 
    }else {
      $response['result'] = 0;
      $response['ErrMsg'] = "找不到帳號，請確認帳密是否有誤";
      echo json_encode($response);
      mysqli_close($conn);
    }
  }
