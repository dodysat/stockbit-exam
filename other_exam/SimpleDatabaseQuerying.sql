SELECT prnt.ID,prnt.UserName, child.UserName AS ParentUserName
FROM USER prnt
LEFT JOIN USER child
ON prnt.Parent = child.ID
ORDER BY prnt.ID ASC
