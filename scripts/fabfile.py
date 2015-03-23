from fabric.api import settings, run, env, sudo, local ,put, lcd

env.user = 'ec2-user'
env.hosts = ['mightydevco.com']

tmp_dir = '/home/ec2-user/tmp/websites/'

local_root_dir= '/Users/scott/projects/websites/'

lcd( local_root_dir )

dest_root_dir= '/www/'

mightydevco_dir= 'mightydevco.com/'
uberscott_dir = 'uberscott.com/'


def push():
    run( 'rm -rf %s' % tmp_dir )
    run( 'mkdir -p %s' % tmp_dir )
    put( local_root_dir+mightydevco_dir, tmp_dir)
    put( local_root_dir+uberscott_dir, tmp_dir)

def archive():
    run( 'sudo rm -rf %s%s' % (dest_root_dir,mightydevco_dir))
    run( 'sudo rm -rf %s%s' % (dest_root_dir,uberscott_dir))

def copy():
    run( 'sudo cp -r %s %s' % (tmp_dir+mightydevco_dir, dest_root_dir) )
    run( 'sudo cp -r %s %s' % (tmp_dir+uberscott_dir, dest_root_dir ))


def stop():
    run( 'sudo service httpd stop')

def start():
    run( 'sudo service httpd start')



def deploy():
    local( 'pwd ')
    push()
    stop()
    archive()
    copy()
    start()



