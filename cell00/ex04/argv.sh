if [ $# -eq 0 ]; then
    echo "No arguments passed."
else
    # แสดงผลอาร์กิวเมนต์ที่ 1 ถึง 3 ถ้ามี
    echo "$1"
    if [ $# -ge 2 ]; then
        echo "$2"
    fi
    if [ $# -ge 3 ]; then
        echo "$3"
    fi
fi
