# colors
RED='\033[0;31m'
BLUE='\033[34m'
GREEN='\033[32m'
YELLOW='\033[33m'
MAGENTA='\033[35m'
CYAN='\033[36m'
WHITE='\033[37m'
WHITE='\033[39m'
NC='\033[0m' # No Color
colorPrint() {
  if [ "$2" = "" ]; then
    echo true
  else
    echo false
  fi
  printf "$1"$2"${NC}\n"
}
colorPrint ${RED}
