$content = Get-Content 'c:\Users\dynel\Desktop\QM_Website\styles.css' -TotalCount 3740
$lock = Get-Content 'c:\Users\dynel\Desktop\QM_Website\lock_styles.css' -Raw
$final = $content -join "`r`n"
$final += "`r`n" + $lock
Set-Content -Path 'c:\Users\dynel\Desktop\QM_Website\styles.css' -Value $final
Write-Host "Styles merged successfully!"
