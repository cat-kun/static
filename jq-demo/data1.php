<?php
	if( $_GET['num'] == 0 ){
		echo "第一页的数据";
	}else if( $_GET['num'] == 1 ){
		echo "第二页的数据";
	}else if( $_GET['num'] == 2 ){
		echo "第三页的数据";
	}
